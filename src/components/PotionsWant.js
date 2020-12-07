
import React, { Component } from 'react';
import '../css/PotionsHave.css';
import PotionBottleImg from '../images/potion-with-background.png';
import Ingredients from '../Ingredients';

export default class PotionsWant extends Component {
    state = {
        potionsWant: [
            {
                id: 1,
                seller: {id: 1, name: "John Smith"},
                name: "Gold",
                color: "#f39c12",
                amount: 500,
                ingredients: [
                    {id: 1, ingredientId: 1, percent: 10},
                    {id: 2, ingredientId: 2, percent: 40},
                    {id: 3, ingredientId: 3, percent: 50},
                ]
            },
            {
                id: 2,
                seller: {id: 2, name: "John Smith"},
                name: "Silver",
                color: "#95a5a6",
                amount: 348,
                ingredients: [
                    {id: 1, ingredientId: 2, percent: 80},
                    {id: 2, ingredientId: 3, percent: 20},
                ]
            },
            {
                id: 3,
                seller: {id: 3, name: "John Smith"},
                name: "Water",
                color: "#2980b9",
                amount: 912,
                ingredients: [
                    {id: 1, ingredientId: 3, percent: 100},
                ]
            },
        ]
    }

    render() {
        return (
            <main>
                <div className="wrapper">
                    <section>
                        <h2>Potions Wanted</h2>
                    </section>
                    {this.state.potionsWant.map(potion => (
                        <section key={'wanted' + potion.id}>
                            <h3>{potion.name} Potion</h3>
                            <p className="potion-trader">Trader: <a href="/user">{potion.seller.name}</a></p>
                            <div className="potion-info">
                                <div className="potion-info-img">
                                    <div>
                                        <img style={{backgroundColor: potion.color}} src={PotionBottleImg} />
                                    </div>
                                </div>
                                <div className="potion-info-contents">
                                    <h4>Ingredients</h4>
                                    <ul>
                                        {potion.ingredients.map(ingredient => (
                                            <li key={ingredient.id}><span>{ingredient.percent}%</span> {Ingredients[ingredient.ingredientId].name}</li>
                                        ))}
                                    </ul>
                                    <h4>Wants</h4>
                                    <ul>
                                        <li><span>20</span> Gold Coins</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="potion-trade">
                                <a href="/request">Offer Trade</a>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        );
    }
}
