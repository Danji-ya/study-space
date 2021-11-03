module.exports = function myloader(content) {

    return content.replace("console.log(", "alert(") // console.log( -> alert( 로 치환
}