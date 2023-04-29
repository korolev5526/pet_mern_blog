https://www.youtube.com/watch?v=QxTeE5EMiWI&t=1s
2:15.07
In home laptop
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass -v C:\Users\Lenovo\Desktop\Frontend\Study\pet_mern_blog\db_volume:/data/db mongo

In work laptop
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass -v C:\Users\Admin3\Desktop\Корнеев\Front\pet_mern_blog\db_volume:/data/db mongo
