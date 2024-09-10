"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.post('/process-payment', (req, res) => {
    const { amount, accountId } = req.body;
    if (!amount || !accountId) {
        return res.status(400).json({ error: 'amount and accountId is required.' });
    }
    const transactionId = (0, uuid_1.v4)();
    return res.status(200).json({
        message: 'payment processed successfully.',
        transactionId: transactionId
    });
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
