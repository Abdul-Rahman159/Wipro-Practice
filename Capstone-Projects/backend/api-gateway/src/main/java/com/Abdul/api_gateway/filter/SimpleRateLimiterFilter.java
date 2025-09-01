
package com.Abdul.api_gateway.filter;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class SimpleRateLimiterFilter implements WebFilter {

    private final Map<String, Window> store = new ConcurrentHashMap<>();
    private final int MAX_REQUESTS = 60; // per minute

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String key = exchange.getRequest().getRemoteAddress() != null ?
                exchange.getRequest().getRemoteAddress().getAddress().getHostAddress() : "unknown";

        Window w = store.computeIfAbsent(key, k -> new Window(Instant.now().getEpochSecond(), new AtomicInteger(0)));
        long now = Instant.now().getEpochSecond();
        synchronized (w) {
            if (now - w.start >= 60) {
                w.start = now;
                w.count.set(0);
            }
            if (w.count.incrementAndGet() > MAX_REQUESTS) {
                exchange.getResponse().setStatusCode(HttpStatus.TOO_MANY_REQUESTS);
                return exchange.getResponse().setComplete();
            }
        }
        return chain.filter(exchange);
    }

    static class Window {
        long start;
        AtomicInteger count;
        Window(long s, AtomicInteger c) { start = s; count = c; }
    }
}
