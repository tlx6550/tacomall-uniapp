<<<<<<< HEAD
import { VantComponent } from '../common/component';
VantComponent({
    field: true,
    relation: {
        name: 'radio',
        type: 'descendant',
        linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.updateChild(target);
        },
        unlinked(target) {
            this.children = this.children.filter((child) => child !== target);
        }
    },
    props: {
        value: {
            type: null,
            observer: 'updateChildren'
        },
        disabled: {
            type: Boolean,
            observer: 'updateChildren'
        }
    },
    methods: {
        updateChildren() {
            (this.children || []).forEach((child) => this.updateChild(child));
        },
        updateChild(child) {
            const { value, disabled } = this.data;
            child.set({
                value,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
=======
import { VantComponent } from '../common/component';
VantComponent({
    field: true,
    relation: {
        name: 'radio',
        type: 'descendant',
        linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.updateChild(target);
        },
        unlinked(target) {
            this.children = this.children.filter((child) => child !== target);
        }
    },
    props: {
        value: {
            type: null,
            observer: 'updateChildren'
        },
        disabled: {
            type: Boolean,
            observer: 'updateChildren'
        }
    },
    methods: {
        updateChildren() {
            (this.children || []).forEach((child) => this.updateChild(child));
        },
        updateChild(child) {
            const { value, disabled } = this.data;
            child.set({
                value,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
