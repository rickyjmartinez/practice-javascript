# 1) Write a function that takes in an array of numbers and returns its sum.

def sum(numbers)
  sum = 0
  numbers.each do |number|
    sum += number
  end
  p sum
end

sum([1, 2, 3])

# 2) Write a function that takes in an array of strings and returns the smallest string.

def smalleststring(words)
  smallest = words[0]
  words.each do |word|
    if smallest.length > word.length
      smallest = word
    end
  end
  p smallest
end

smalleststring(["five", "one", "seven"])

# 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

def reverse(numbers)
  backwards = []
  i = numbers.length - 1
  while i >= 0
    backwards << numbers[i]
    i -= 1
  end
  p backwards
end

reverse([0, 1, 2, 3])

# 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

def a_words(words)
  filtered_words = []
  words.each do |word|
    if word[0] == "a"
      filtered_words << word
    end
  end
  p filtered_words
end

a_words(["apple","ball","avalanche"])