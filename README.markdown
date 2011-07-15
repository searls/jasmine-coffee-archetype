jasmine-coffee-archetype
=================
**A Maven Archetype for quickly starting projects with Jasmine, CoffeeScript, JSHint, static asset deployment **

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


