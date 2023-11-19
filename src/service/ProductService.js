export const ProductService = {
    getProductsData() {
        return [
            {
                props: "Props are for Parent-to-Child Communication: Props allow you to pass data from a parent component to a child component. The parent component can bind values to props, and the child component receives and uses these values.",
                refs: "Refs are for Unidirectional and Bidirectional Communication: Refs are used for accessing and mutating a value within a component. They can be used for both unidirectional (parent to child) and bidirectional (child to parent) communication.",
            },
            {
                props:"Props are Immutable: Child components should not modify the props directly. In Vue, props are considered immutable, meaning that the child component should treat them as read-only.",
                refs:"Refs are Mutable: Refs are mutable, and you can directly modify the value they reference. This makes them suitable for managing local component state.",
            },
            {
                props:"Declared in the Child Component: Props are declared in the child component's props option to specify which properties it expects to receive.",
                refs:"Declared in the Component Setup: Refs are declared in the setup function of the component. They are typically created using the ref function.",
            },
            {
                props:"Passed as Attributes: Props are passed down to child components as attributes in the template syntax.",
                refs:"Accessed Using .value: Refs are accessed using the .value property. When using a ref in a template, Vue automatically unwraps the .value for you.",
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

