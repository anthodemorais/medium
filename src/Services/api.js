export default {
    getArticles: () => {
        return new Promise((resolve, reject) => {
            fetch('http://blog.etherial.fr/articles', {
                method: 'GET'
            }).then((results) => {
                results.json().then((json) => {
                    resolve(json["data"]);
                });
            });
        });
    },

    getArticle: (id) => {
        return new Promise((resolve, reject) => {
            fetch(`http://blog.etherial.fr/articles/${id}`, {
                method: 'GET'
            }).then((results) => {
                results.json().then((json) => {
                    resolve(json["data"]);
                });
            });
        });
    },

    addArticle: (title, content, category) => {
        return new Promise((resolve, reject) => {
            fetch('http://blog.etherial.fr/articles/categories', {
                method: 'GET'
            }).then((results) => {
                results.json().then((json) => {
                    for (var i in json.data)
                    {
                        if (json.data[i].name.toLowerCase() === category.toLowerCase())
                        {
                            fetch('http://blog.etherial.fr/articles', {
                                method: 'POST',
                                headers: {  'Content-Type': 'application/json',
                                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                                },
                                body: JSON.stringify({ 
                                    title: title,
                                    content: content,
                                    article_category_id: json.data[i].id
                                })
                            }).then((results) => {
                                resolve(results);
                            });
                        }
                    }
                    reject("Unknown category");
                });
            });
        })
    },

    getToken: (email, password) => {
        return new Promise((resolve, reject) => {
            fetch('http://blog.etherial.fr/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    email: email,
                    password: password
                })
            }).then((results) => {
                results.json().then((json) => {
                    resolve(json.data.token);
                });
            });
        })
    },

    SignUp: (firstname, lastname, email, password, password_verif) => {
        return new Promise((resolve, reject) => {
            fetch('http://blog.etherial.fr/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    password_verif: password_verif
                })
            }).then((results) => {
                results.json().then((json) => {
                    resolve(json);
                });
            });
        })
    },

    getUserInfos: () => {
        return new Promise((resolve, reject) => {
            fetch('http://blog.etherial.fr/users/me', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((results) => {
                results.json().then((json) => {
                    resolve(json["data"]);
                });
            });
        });
    },

    updateUser: (firstname, lastname, birthdate) => {
        return new Promise((resolve, reject) => {
            fetch('http://blog.etherial.fr/users/me', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    birthdate: birthdate
                })
            }).then((results) => {
                results.json().then((json) => {
                    resolve(json);
                });
            });
        })
    },

    updatePassword: (old, newPwd, verif) => {
        return new Promise((resolve, reject) => {
            fetch('http://blog.etherial.fr/users/me', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    password_old: old,
                    password_new: newPwd,
                    password_new_verif: verif
                })
            }).then((results) => {
                results.json().then((json) => {
                    resolve(json);
                });
            });
        })
    }
}