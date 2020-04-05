class Controller {
    constructor(model, view, id) {
        this.model = model;
        this.view = view;
        this.id = id;
        this.onDisplayChanged(this.id);
        this.toHandleClick();
    };

    onDisplayChanged = (id, event) => {
        this.view.refeshCalculator(id, event);
    }

    toHandleClick = () => {
        this.view.divButton.addEventListener('click', event => {
            if(event.target.value == "="){
                let result = this.model.execute(this.view.calc);
                this.view.refeshCalculator(this.id, event, result)
            }
            else this.view.refeshCalculator(this.id, event)
        })
    }
}
