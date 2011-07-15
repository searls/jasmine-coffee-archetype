jasmine-coffee-archetype
=================

**A Maven Archetype for quickly starting projects with Jasmine, CoffeeScript, JSHint, static asset deployment**

Usage
-----

Create a new Maven project that's set up to use jasmine-maven-plugin, replete with example specs.

    mvn archetype:generate \
    -DarchetypeRepository=http://searls-maven-repository.googlecode.com/svn/trunk/snapshots \
    -DarchetypeGroupId=com.github.searls \
    -DarchetypeArtifactId=jasmine-coffee-archetype \
    -DarchetypeVersion=1.0.0-SNAPSHOT \
    -DgroupId=com.acme \
    -DartifactId=my-jasmine-project \
    -Dversion=0.0.1-SNAPSHOT

If you're on Windows or if your shell doesn't like the newlines above, here's the same command in a single line:

    mvn archetype:generate -DarchetypeRepository=http://searls-maven-repository.googlecode.com/svn/trunk/snapshots -DarchetypeGroupId=com.github.searls -DarchetypeArtifactId=jasmine-coffee-archetype -DarchetypeVersion=1.0.0-SNAPSHOT -DgroupId=com.acme -DartifactId=my-jasmine-project -Dversion=0.0.1-SNAPSHOT


Running specs
-------------

To develop code, you'll want to run your specs in a browser and refresh as you go (more info [here](http://searls.github.com/jasmine-maven-plugin)):

    mvn jasmine:bdd

Running the web app
-------------------

To see your actual web app and get instant Coffee compilation, run:

    mvn tomcat:run

And then visit [localhost:8080](http://localhost:8080)

Building
--------

To build everything just:

    mvn clean install

And then check out the ZIP file in your project's target directory for static deployment to some server.