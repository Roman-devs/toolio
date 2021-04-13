FROM openjdk:15

MAINTAINER Roman Kuite <roman.kuite@gmail.com>

ADD backend/target/tool-io.jar tool-io.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dsecurity.jwt.secret=$JWT_SECRET -jar /tool-io.jar"]