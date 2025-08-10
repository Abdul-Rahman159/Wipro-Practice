package com.wipro.thread;

public class CounterEx3 {

		int count = 0;
		
		synchronized void increment() {
			count++;
		}

		public int getCount() {
			return count;
		}

		public void setCount(int count) {
			this.count = count;
		}

		public CounterEx3(int count) {
			super();
			this.count = count;
		}

		@Override
		public String toString() {
			return "CounterEx3 [count=" + count + "]";
		}
				
		
}

