export default {
    methods: {
        $checkNullFields(obj){
            return Object.keys(obj).every((key) => {
                return !!obj[key];
            });
        },
    }
};
