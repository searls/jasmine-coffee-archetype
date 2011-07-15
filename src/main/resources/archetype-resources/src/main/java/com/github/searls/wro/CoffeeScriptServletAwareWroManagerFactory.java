package com.github.searls.wro;

import ro.isdc.wro.manager.factory.BaseWroManagerFactory;
import ro.isdc.wro.model.resource.processor.factory.ProcessorsFactory;
import ro.isdc.wro.model.resource.processor.factory.SimpleProcessorsFactory;

public class CoffeeScriptServletAwareWroManagerFactory extends BaseWroManagerFactory {
  @Override
  protected ProcessorsFactory newProcessorsFactory() {
    final SimpleProcessorsFactory factory = new SimpleProcessorsFactory();
    factory.addPreProcessor(new ConditionalCoffeeScriptProcessor());
    return factory;
  }
}
