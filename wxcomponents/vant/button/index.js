<<<<<<< HEAD
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
VantComponent({
    mixins: [button, openType],
    classes: ['hover-class', 'loading-class'],
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        }
    },
    methods: {
        onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
=======
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
VantComponent({
    mixins: [button, openType],
    classes: ['hover-class', 'loading-class'],
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        }
    },
    methods: {
        onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
