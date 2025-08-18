package com.wipro.thread;

import java.util.List;

public class ConsonantThread implements Runnable {
	List<String> names;

    public ConsonantThread(List<String> names) {
        this.names = names;
    }

    @Override
	public void run() {
    	for (int i = 0; i < names.size(); i++) {
            String name = names.get(i);
            char firstChar = Character.toLowerCase(name.charAt(0));
            if (!(firstChar == 'a' || firstChar == 'e' || firstChar == 'i' || firstChar == 'o' || firstChar == 'u')) {
                names.set(i, name.toLowerCase());
            }
        }
	}
}
