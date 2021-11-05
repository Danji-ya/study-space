class WebpackPluginTest {
    apply(compiler) {
        compiler.hooks.done.tap('My Plugin', stats => {
            console.log('My Plugin done');
        })
    }
}

module.exports = WebpackPluginTest;