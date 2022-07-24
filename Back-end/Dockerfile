# syntax=docker/dockerfile:1

FROM maven:3.6.3-openjdk-14-slim AS builder
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn compile
RUN mvn clean -e -B package

EXPOSE 27017
EXPOSE 8080

CMD ["mvn", "exec:java"]

# CMD ["mvn", "exec:java", "-Dexec.executable=\"maven\""]
