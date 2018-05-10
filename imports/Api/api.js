import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";


if (Meteor.isServer) {

    Meteor.publish('Events', function EventsPublication() {
        return Events.find();
    });

    const addMethodNameRule = {
        type: 'method',
        name: 'MyMethodName'
    };
    
    DDPRateLimiter.addRule(addMethodNameRule, 5, 2000);
}

Meteor.methods({
    "SomeApiOrDB.myMethod"(var1, var2){
        check(var1);
        check(var2);

    }
});