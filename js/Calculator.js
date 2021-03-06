/**
 * Calculator Class
 *
 * Performs addition and subtraction on two operands.
 *
 * @author Tony <ttonyarra@gmail.com>
 * @author Kristin
 */
class Calculator {

    /**
     * Default constructor for Calculator
     *
     * @param {string} name Name of your calculator
     */
    constructor(name) {
        this.setName(name);

        /**
         * jQuery reference for calculator
         *
         * @type {jQuery}
         */
        this.$calculator = $('#calculator');

        /**
         * Operation to be performed when the '=' button is pressed.
         *
         * This is set by the last operation-button pressed.
         *
         * @type {string}
         */
        this.currentOperation = null;

        /**
         * First operand (number to operate on)
         * 
         * There will only be two operands at any time. 
         * 
         * @type {float}
         */
        this.operand1 = null;

        /**
         * Second operand (number to operate on)
         * 
         * There will only be two operands at any time.
         * 
         * @type {float}
         */
        this.operand2 = null;

        this.listeners();
    }

    /**
     * Set your jQuery event listeners, such as 'click' events.
     */
    listeners() {
        $('#equalsBtn').click(this.performOperation());
        //TODO: complete stub
    }

    /**
     * Perform an operation based on the currentOperation
     */
    performOperation() {
        //TODO: complete stub
    }

    /**
     * Perform an add operation
     */
    add() {
        //TODO: complete stub
    }

    /**
     * Perform a subtract operation
     */
    subtract() {
        //TODO: complete stub
    }

    /**
     * Set the operation to be performed.
     *
     * @param {string} operation
     */
    setCurrentOperation(operation) {
        //TODO: complete stub
    }

    /**
     * Set the name of the calculator
     *
     * Changes the h1 text
     *
     * @param name
     */
    setName(name) {
        //TODO: complete stub
    }

}
