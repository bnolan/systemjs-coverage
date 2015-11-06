export default class TsModule {
    getDefaultProps() {
        return {
            text: 'boop'
        };
    }

    getText() {
        if (true) {
            return this.render();
        }

        // Unreachable.
        return 'no';
    }

    render() {
        return this.getDefaultProps().text;
    }
}
