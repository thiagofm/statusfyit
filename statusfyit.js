// Collections
Users = new Meteor.Collection("users");

if (Meteor.is_client) {
  $().ready(function(){
      hello = Meteor.ui.render(function(){
        return Template.hello();
      });
      $('body').html(hello);
  });

  //TEMPLATE HELLO
  Template.hello.users = function () {
    return Users.find({});
  };

  Template.hello.events = {
    'click #new_user_but' : function () {
      new_user = Meteor.ui.render(function(){
        return Template.new_user();
      });
      $('body').html(new_user);
    }
  };

  //TEMPLATE NEW_USER
  Template.new_user.events = {
    'click #send' : function () {
      Users.insert({name: $('#username').val()});
      hello = Meteor.ui.render(function(){
        return Template.hello();
      });
      $('body').html(hello);      
    }
  };

}

if (Meteor.is_server) {
  Meteor.startup(function () {
  });
}