FROM tomcat:latest
ADD target/*.war /usr/local/tomcat/webapps/ROOT.war
CMD ["catalina.sh", "run"]