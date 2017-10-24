class Users {
    constructor() {
        this.users = [
            {
                id: 1,
                firstName: 'Alex',
                lastName: 'Varv',
                age: 10,
                email: 'asdasd'
            },
            {
                id: 2,
                firstName: 'Boris',
                lastName: 'Britva',
                age: 74,
                email: 'asdasd'
            },
            {
                id: 3,
                firstName: 'Marya',
                lastName: 'Saint',
                age: 41,
                email: 'asdasd'
            },
            {
                id: 4,
                firstName: 'Steve',
                lastName: 'Cash',
                age: 65,
                email: 'asdasd'
            }
        ];
    }

    findIndexById(id) {
        let index;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    get() {
        return this.users;
    }

    put(user) {
        Users.Id += 1;
        this.users.push({...user, id: Users.Id});
    }

    patch(user) {
        const index = this.findIndexById(user.id);
        this.users[index] = user;
    }

    delete(id) {
        const index = this.findIndexById(id);
        this.users.splice(index, 1);
    }
}

Users.Id = 4;

module.exports = Users;
