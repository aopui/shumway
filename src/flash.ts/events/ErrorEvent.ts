/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations undxr the License.
 */
// Class: ErrorEvent
module Shumway.AVM2.AS.flash.events {
  import notImplemented = Shumway.Debug.notImplemented;
  export class ErrorEvent extends flash.events.TextEvent {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // ["_id", "errorID", "clone", "toString"];
    
    constructor (type: string, bubbles: boolean = false, cancelable: boolean = false, text: string = "", id: number /*int*/ = 0) {
      type = "" + type; bubbles = !!bubbles; cancelable = !!cancelable; text = "" + text; id = id | 0;
      false && super(undefined, undefined, undefined, undefined);
      notImplemented("Dummy Constructor: public flash.events.ErrorEvent");
    }
    
    // JS -> AS Bindings
    static ERROR: string = "error";
    
    _id: number /*int*/;
    errorID: number /*int*/;
    clone: () => flash.events.Event;
    
    // AS -> JS Bindings
    
    // _errorID: number /*int*/;
  }
}