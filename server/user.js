import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    passwordForgot: (email) => {
        check(email, String)

        Accounts.forgotPassword({ email }, (err, result) => {
            if (err) return err
            return result
        })
    },
    updateUser: (_id, data) => {
        check(data, Object)
        check(_id, String)

        return Meteor.users.update({ _id }, { $set: data })
    },
    removeUser: (_id) => {
        check(_id, String)
        return Meteor.users.remove({ _id })
    }
})