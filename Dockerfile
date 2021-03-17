FROM openjdk:11
#FROM node
ADD target/cvs-inv-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
#WORKDIR /app
#ENV PATH /app/node_modules/ .bin:$PATH
#RUN npm install
#RUN npm install @angular/cli
#COPY . /app

