/**
 * 현재 smalltalk 사용 불가.
 * electron 사용 시 webpack으로 빌드해야 하는 듯.
 * https://github.com/coderaiser/smalltalk/issues/26
 */

// https://www.npmjs.com/package/smalltalk
const smalltalk = require('smalltalk')
// const smalltalk = require('smalltalk/native')

// Alert
smalltalk
    .alert("Title", "Message")
    .then(() => {
        console.log('ok')
    })

// Confirm
smalltalk
    .confirm('Question', 'Are you sure?')
    .then(() => {
        console.log('yes')
    })
    .catch(() => {
        console.log('no')
    })

// Prompt
let opt = {
    // type: 'password',
}
smalltalk
    .prompt('Question', 'How old are you?', '10', opt)
    .then((value) => {
        console.log(value);
    })
    .catch(() => {
        console.log('cancel');
    });