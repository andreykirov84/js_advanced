function requestValidation(object){
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const UriRegexPattern = /(^[\w.]+$)/;
    const MessageRegexPattern = /([<>\\&'"])/;

    if (!object.method || !methods.includes(object.method)){
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!object.uri || object.uri === '' || !UriRegexPattern.test(object.uri)){
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!object.version || !versions.includes(object.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    if (object.message === undefined|| MessageRegexPattern.test(object.message)){
        throw new Error('Invalid request header: Invalid Message');
    }
    return object;
}



const methodInvalid = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}

const versionInvalid = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}

const valid = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}

const messageInvalid = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}


// requestValidation(methodInvalid)
console.log(requestValidation(valid))