#include <bits/stdc++.h>
using namespace std;
 
string  dayofweek(string &str) 
{ 
    int d = stoi(str.substr(0, 2));
    int m = stoi(str.substr(3, 2));
    int y = stoi(str.substr(6, 4));
    static int t[] = { 0, 3, 2, 5, 0, 3,
                       5, 1, 4, 6, 2, 4 }; 
    y -= m < 3;
    int ans= ( y + y / 4 - y / 100 + 
             y / 400 + t[m - 1] + d) % 7; 
   vector< string>  days = {
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    };
    return days[ans];
} 
 
// Driver Code
int main() 
{   string datestr="25-08-2001";
    string day = dayofweek(datestr); 
    cout << day; 
 
    return 0; 
} 