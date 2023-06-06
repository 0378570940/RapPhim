var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
/* var formidable = require('formidable'); */
/// câu lệnh chạy server : node server.js

app.use(express.static('data'))

//enable CORS for request verbs
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//#region Product

//getMenu
app.get('/menu', function (req, res) {
    fs.readFile(`${__dirname}/data/menu.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});
app.get('/menu/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/menu.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});
app.delete('/menu/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/menu.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        if (index > -1)
            data.splice(index, 1);
        fs.writeFile(`${__dirname}/data/menu.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Delete menu success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.post('/menu', function (req, res) {
    fs.readFile(`${__dirname}/data/menu.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var neworder = { ...req.body, id: Number.parseInt(max) + 1 };
        data.push(neworder);
        fs.writeFile(`${__dirname}/data/menu.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create menu success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.put('/menu/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(`${__dirname}/data/menu.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        data[index] = { ...data[index], ...req.body }
        fs.writeFile(`${__dirname}/data/menu.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Update menu success.');
        });
        res.end(JSON.stringify(data));
    });
});
//end

//getList
app.get('/list', function (req, res) {
    fs.readFile(`${__dirname}/data/list.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});
app.get('/list/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/list.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});
app.delete('/list/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/list.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        if (index > -1)
            data.splice(index, 1);
        fs.writeFile(`${__dirname}/data/list.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Delete list success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.post('/list', function (req, res) {
    fs.readFile(`${__dirname}/data/list.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var neworder = { ...req.body, id: Number.parseInt(max) + 1 };
        data.push(neworder);
        fs.writeFile(`${__dirname}/data/list.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create list success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.put('/list/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(`${__dirname}/data/list.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        data[index] = { ...data[index], ...req.body }
        fs.writeFile(`${__dirname}/data/list.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Update list success.');
        });
        res.end(JSON.stringify(data));
    });
});

//manga
app.get('/manga', function (req, res) {
    fs.readFile(`${__dirname}/data/manga.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});
app.get('/manga/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/manga.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});
app.delete('/manga/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/manga.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        if (index > -1)
            data.splice(index, 1);
        fs.writeFile(`${__dirname}/data/manga.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Delete manga success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.post('/manga', function (req, res) {
    fs.readFile(`${__dirname}/data/manga.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var neworder = { ...req.body, id: Number.parseInt(max) + 1 };
        data.push(neworder);
        fs.writeFile(`${__dirname}/data/manga.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create manga success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.put('/manga/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(`${__dirname}/data/manga.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        data[index] = { ...data[index], ...req.body }
        fs.writeFile(`${__dirname}/data/manga.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Update manga success.');
        });
        res.end(JSON.stringify(data));
    });
});
//end

//use
app.get('/user/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/user.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});
app.delete('/user/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/user.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        if (index > -1)
            data.splice(index, 1);
        fs.writeFile(`${__dirname}/data/user.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Delete user success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.put('/user/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(`${__dirname}/data/user.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        data[index] = { ...data[index], ...req.body }
        fs.writeFile(`${__dirname}/data/user.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Update user success.');
        });
        res.end(JSON.stringify(data));
    });
});
//end

//category
app.get('/category', function (req, res) {
    fs.readFile(`${__dirname}/data/category.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});
app.get('/category/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/category.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});
app.delete('/category/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/category.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        if (index > -1)
            data.splice(index, 1);
        fs.writeFile(`${__dirname}/data/category.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Delete category success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.post('/category', function (req, res) {
    fs.readFile(`${__dirname}/data/category.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var neworder = { ...req.body, id: Number.parseInt(max) + 1 };
        data.push(neworder);
        fs.writeFile(`${__dirname}/data/category.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create category success.');
        });
        res.end(JSON.stringify(data));
    });
})
app.put('/category/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(`${__dirname}/data/category.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        data[index] = { ...data[index], ...req.body }
        fs.writeFile(`${__dirname}/data/category.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Update category success.');
        });
        res.end(JSON.stringify(data));
    });
});
//end

app.get('/product', function (req, res) {
    fs.readFile(`${__dirname}/data/product.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});

app.get('/user', function (req, res) {
    fs.readFile(`${__dirname}/data/user.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});

app.post('/user', function (req, res) {
    fs.readFile(`${__dirname}/data/user.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var newproduct = { ...req.body, id: Number.parseInt(max) + 1 };
        data.push(newproduct);
        fs.writeFile(`${__dirname}/data/user.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create product success.');
        });
        res.end(JSON.stringify(data));
    });
})

app.post('/product', function (req, res) {
    fs.readFile(`${__dirname}/data/product.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var newproduct = { ...req.body, id: Number.parseInt(max) + 1 };
        data.push(newproduct);
        fs.writeFile(`${__dirname}/data/product.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create product success.');
        });
        res.end(JSON.stringify(data));
    });
})

app.post('/order', function (req, res) {
    fs.readFile(`${__dirname}/data/order.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var neworder = { ...req.body, id: Number.parseInt(max) + 1 };
        data.push(neworder);
        fs.writeFile(`${__dirname}/data/order.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create order success.');
        });
        res.end(JSON.stringify(neworder));
    });
})

//theem order
app.get('/order', function (req, res) {
    fs.readFile(`${__dirname}/data/order.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});
app.get('/order/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/order.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});

app.get('/product/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/product.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});

app.put('/product/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(`${__dirname}/data/product.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        data[index] = { ...data[index], ...req.body }
        fs.writeFile(`${__dirname}/data/product.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Update product success.');
        });
        res.end(JSON.stringify(data));
    });
});

app.delete('/product/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/product.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        if (index > -1)
            data.splice(index, 1);
        fs.writeFile(`${__dirname}/data/product.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Delete product success.');
        });
        res.end(JSON.stringify(data));
    });
})

app.get('/customer', function (req, res) {
    fs.readFile(`${__dirname}/data/customer.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});

app.get('/city', function (req, res) {
    fs.readFile(`${__dirname}/data/city.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});

app.get('/district/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/district.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.filter(x => x.cityId.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});

app.post('/customer', function (req, res) {
    fs.readFile(`${__dirname}/data/customer.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        if (data.length > 0) {
            var maxObject = data.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current
            });
            max = maxObject.id;
        }
        var newproduct = { id: max + 1, ...req.body };
        data.push(newproduct);
        fs.writeFile(`${__dirname}/data/customer.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create customer success.');
        });
        res.end(JSON.stringify(data));
    });
})

app.get('/customer/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/customer.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var item = data.find(x => x.id.toString() === req.params.id);
        res.end(JSON.stringify(item));
    });
});

app.put('/customer/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(`${__dirname}/data/customer.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        data[index] = { ...data[index], ...req.body }
        fs.writeFile(`${__dirname}/data/customer.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Update customer success.');
        });
        res.end(JSON.stringify(data));
    });
});

app.delete('/customer/:id', function (req, res) {
    fs.readFile(`${__dirname}/data/customer.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var index = data.findIndex(function (i) {
            return i.id.toString() === req.params.id;
        });
        if (index > -1)
            data.splice(index, 1);
        fs.writeFile(`${__dirname}/data/customer.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Delete customer success.');
        });
        res.end(JSON.stringify(data));
    });
})
//#endregion

//#region 
app.get('/customer', function (req, res) {
    fs.readFile(`${__dirname}/data/customer.json`, 'utf8', function (err, data) {
        res.end(JSON.stringify(JSON.parse(data), null, 2));
    });
});

app.post('/customer', function (req, res) {
    fs.readFile(`${__dirname}/data/customer.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var max = 0;
        var max = data.length === 0 ? 0 : data.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev.id : current.id
        });
        var newproduct = { id: max + 1, ...req.body };
        data.push(newproduct);
        fs.writeFile(`${__dirname}/data/customer.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create product success.');
        });
        res.end(JSON.stringify(data));
    });
})
//#endregion

function rand() {
    return Math.random().toString(36).substr(2); // remove `0.`
};
function generateToken() {
    var token = function () {
        var token = ""
        for (let index = 0; index < 10; index++) {
            token += rand()
        }
        return token;
    };
    return token();
}
function generateRefreshToken() {
    var token = function () {
        return rand();
    };
    return token();
}

app.post('/auth', function (req, res) {
    fs.readFile(`${__dirname}/data/token.json`, 'utf8', function (err, data) {
        data = JSON.parse(data);
        if (req.body.refresh_token) {
            data.refresh_token = generateRefreshToken();
        }
        var d1 = new Date(),
            d2 = new Date(d1);
        d2.setMinutes(d1.getMinutes() + 30);
        data.exprise = d1.toUTCString();
        data.access_token = generateToken();
        fs.writeFile(`${__dirname}/data/token.json`, JSON.stringify(data), function (err) {
            if (err) return console.log(err);
            console.log('Create token success.');
        });
        res.end(JSON.stringify(data));
    });
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("My app listening at http://localhost:%s", host, port)
})  