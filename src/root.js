import increment from './increment';

const Root = {
    initialState() {
        return {
            count: 0
        };
    },

    render({state}, setState) {
        function incrementCount() {
            setState({count: increment(state.count)});
        }

        return (
            <div>
                <div>
                    This is the Deku-Boilerplate
                </div>
                <div>
                    Current Count: {state.count}
                </div>
                <button onClick={incrementCount}>Increment</button>
            </div>
        );
    }
};

export default Root;
