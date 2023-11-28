import { init } from '@rematch/core';
import { posts } from './models';
import loadingPlugin from '@rematch/loading'

const store = init({
    // configure the store
    models: { posts },
    plugins: [loadingPlugin()], // Add loading plugin
})

export default store;