#爬取已上映电影每日票房数据，票房占比，排片占比，周几（自行量化），场均人次
#将每日票房数据写入BoxingData.txt文件中
#同时爬取的数据传入数据库  字段可以是Name Day1 Day2 Day3.....   每一条数据都是一部电影上映的每日票房数据
#数据的格式例如： 美国队长 [28556.72,0.784,0.4383,0.5,58] [56556.2,0.734,0.4283,0.2,46] ......
#其中[28556.72,0.784,0.4383,0.5,58]分别对应[每日票房数据，票房占比，排片占比，周几（自行量化），场均人次]
#从https://zgdypf.zgdypw.cn/爬取