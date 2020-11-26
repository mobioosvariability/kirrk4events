FROM ubuntu:xenial

ARG NODEJS_VERSION="10"
ARG IONIC_VERSION="4.3.1"
ARG ANDROID_SDK_VERSION="3859397"
ARG ANDROID_HOME="/opt/android-sdk"
ARG ANDROID_BUILD_TOOLS_VERSION="26.0.0"
ENV GRADLE_HOME /usr/share/gradle

# INSTALL JDK && JRE
# INSTALL Node/NPM/Ionic-Cli
# INSTALL Android SDK
# INSTALL SDK tool for support ionic build command

ENV JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
ENV ANDROID_HOME "${ANDROID_HOME}"
RUN apt-get update \
    && apt-get install -y \
    build-essential \
    openjdk-8-jre \
    openjdk-8-jdk \
    curl \
    unzip \
    git \
    gradle \
    sudo \
    && curl -sL https://deb.nodesource.com/setup_${NODEJS_VERSION}.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g cordova ionic@${IONIC_VERSION} \
    && npm cache clear --force \
    && cd /tmp \
    && curl -fSLk https://dl.google.com/android/repository/sdk-tools-linux-${ANDROID_SDK_VERSION}.zip -o sdk-tools-linux-${ANDROID_SDK_VERSION}.zip \
    && unzip sdk-tools-linux-${ANDROID_SDK_VERSION}.zip \
    && mkdir /opt/android-sdk \
    && mv tools /opt/android-sdk \
    && (while sleep 2; do echo "y"; done) | $ANDROID_HOME/tools/bin/sdkmanager --licenses \
    && $ANDROID_HOME/tools/bin/sdkmanager "platform-tools" \
    && $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    && apt-get autoremove -y \
    && rm -rf /tmp/sdk-tools-linux-${ANDROID_SDK_VERSION}.zip

RUN chmod -R 777 /opt/
RUN ln -s /usr/lib/jvm/java-1.8.0-openjdk-amd64 /docker-java-home
RUN ionic start ionicApp blank --no-interactive
COPY *.zip .
RUN unzip -d . *.zip config.xml
RUN yes | cp -rf config.xml /ionicApp/config.xml
RUN cd ionicApp \
    && npm install \
    && ionic cordova build android
RUN chmod -R 777 /ionicApp 
