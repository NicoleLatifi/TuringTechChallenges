# method that counts down from n until we get to 0
# run with command: ruby recur.rb

# def countdown(num)
#   if num < 0 #base case, get me out of this method call when...
#     return #this stops the method
#   end
#
#   p num #recursive case
#   countdown(num - 1)
# end
#
# countdown(8) #if you change this to 5000, the call stack gets overwhelmed



# sum([1, 2, 3, 4]) => 10
def sum(nums)
  if nums.empty?
    return 0
  end

  nums.shift + sum(nums)
end

p sum([1, 2, 3, 4])
