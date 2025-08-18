package com.wipro.junitest;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class JUnitTestEx8 {

	@Test
	void test() {
		String input = null;

        assertThrows(NullPointerException.class, () -> {
            input.toUpperCase();
        });
	}

}