import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { DDPRateLimiter } from "meteor/ddp-rate-limiter";

export const Comments = new Mongo.Collection("comments");

if (Meteor.isServer) {
    //This code only runs on the server
    Meteor.publish("comments", function CommentsPublication() {
        return Comments.find();
    });

    const addComment = {
        userId(userId) {
            const user = Meteor.users.findOne(userId);
            return user;
        },
        type: 'method',
        name: 'comments.publication'
    };
    
    DDPRateLimiter.addRule(publishComment, 5, 2000);
}

Meteor.methods({
    "comments.publishComment"(r, c){
        route: r,
        comment: c 

    }
});