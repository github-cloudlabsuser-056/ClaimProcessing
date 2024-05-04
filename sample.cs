public class Program
{
    public static void Main(string[] args)
    {
        // Assuming arr and n are defined somewhere above in your code
        PrintSumOfNumbers(arr, n);
    }

    private static void PrintSumOfNumbers(int[] numbers, int count)
    {
        int total = Sum(numbers, count);
        Console.WriteLine($"Sum of the numbers: {total}");
    }

private static int Sum(int[] numbers, int count)
{
    int sum = 0;
    for (int i = 0; i < count; i++)
    {
        sum += numbers[i];
    }
    return sum;
} 


}