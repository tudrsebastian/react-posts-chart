# react-posts-chart

## Created App

This app is created with Vite + React , using yarn as a package manager.

## Steps

###### 1.Reading about the libraries

First step was to read documentation about the libraries that I have small to none experience with(Apollo, Visx).
Searching for different methods to achieve the end result with them.

###### 2.Fetching data

Second step was to figure it out how to fetch data with Apollo from the first time.Encountered some syntax errors due to my little experience with Appollo
but it wasn't a big problem fixed it pretty fast.

###### 3.Getting the dates

After fetching the data I needed, I had to format it to actual dates by mapping over it and converting each date.
This way was easier to work with it afterwards and display it in the Chart.

###### 4.Storing the data

After formatting the data I stored it in a useState array.Because I couldn't find a way to get only the name of the Month from the response and got only the number that represents the month.

###### 5.Getting the number of posts for each month

With the months stored in the useState Array now I had to itterate over it again and chose forEach method because I found it easier to do it.

###### 6.Creating chartData

Without the name of the months I thought the best thing to do is to create an array of objects each of them having inside the month and the
total posts according to the month.(One thing that I still think about is how to assign the posts to the chartData without hardcoding them)

###### 7.Creating the chart

After finishing with the data manipulation I started to research in the Visx Documentation a way to create a chart and not to be really complicated.
One easy way that I found and liked is xychart.

###### 8.Last step

Everything is done and in place!
One last push to github!
