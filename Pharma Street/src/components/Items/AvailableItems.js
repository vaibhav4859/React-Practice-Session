
import Card from '../UI/Card';
import classes from './AvailableItems.module.css';
import ItemsList from './ItemsList/ItemsList';

const DUMMY_ITEMS = [
    {
        id: 'm1',
        name: 'Paracetamol',
        description: 'Painkiller used to treat aches and pain',
        price: 1.99,
    },
    {
        id: 'm2',
        name: 'Cetirizine',
        description: 'Relieve allergy symptoms',
        price: 1.5,
    },
    {
        id: 'm3',
        name: 'Althrocin',
        description: 'Treats chest infections, skin conditions etc.',
        price: 2.99,
    },
    {
        id: 'm4',
        name: 'Penicillin',
        description: 'Treats a wide range of infections.',
        price: 1.99,
    },
    {
        id: 'm5',
        name: 'Zinetac ',
        description: 'Treats and prevent heartburn, indigestion,',
        price: 1.50,
    },
    {
        id: 'm6',
        name: 'Azithromycin',
        description: 'Treats certain bacterial infections',
        price: 2.99,
    }
];

const AvailableItems = props => {

    const itemList = DUMMY_ITEMS.map(item => <ItemsList key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />)

    return (
        <section className={classes.items}>
            <Card>
                <ul>
                    {itemList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableItems;