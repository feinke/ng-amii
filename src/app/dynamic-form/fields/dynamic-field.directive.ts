import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit, ComponentRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from "./form-button.component";
import { FormInputComponent } from "./form-input.component";
import { Field } from '../dynamic-form.model';

const components = {
  input: FormInputComponent,
  button: FormButtonComponent,
}

type ComponentsType = FormInputComponent | FormButtonComponent;

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  config: Field;

  @Input()
  form: FormGroup;

  component: ComponentRef<ComponentsType>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.form;
  }
}