import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/process-payment', (req, res) => {
    const { amount, accountId } = req.body;

    if (!amount || !accountId) {
        return res.status(400).json({ error: 'amount and accountId is required.' });
    }
    const transactionId = uuidv4();

    return res.status(200).json({
        message: 'payment processed successfully.',
        transactionId: transactionId
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
