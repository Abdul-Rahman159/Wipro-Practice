package com.wipro.methodref;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MethodRefEx5 {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Janhvee", "Aditi", "Sakshi", "Payal");

        List<String> sortedNames = names.stream()
                .sorted(String::compareTo)
                .collect(Collectors.toList());

        System.out.println(sortedNames);
    }
}
