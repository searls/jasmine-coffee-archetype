package com.github.searls.wro;

import java.io.IOException;
import java.io.Reader;
import java.io.Writer;

import org.apache.commons.io.IOUtils;

import ro.isdc.wro.extensions.processor.js.CoffeeScriptProcessor;
import ro.isdc.wro.model.resource.Resource;

public class ConditionalCoffeeScriptProcessor extends CoffeeScriptProcessor {

  @Override
  public void process(Resource resource, Reader reader, Writer writer) throws IOException {
    if(resource.getUri().endsWith(".coffee")) {
      super.process(resource, reader, writer);
    } else {
      writer.write(IOUtils.toString(reader));
    }
  }

}
