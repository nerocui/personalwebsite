import React, { useState } from 'react';
import { connect } from 'react-redux';
import GitHubRepoCard from '../components/githubRepoCard';
import '../styles/repoList.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Lottie from 'react-lottie';
import leftData from '../data/left.json';
import rightData from '../data/right.json';

class GitHubListContainer extends React.Component {
    constructor(props) {
        super(props);
        const Card = props.ChildCard;
        this.state = {
            currentIndex: 0,
            itemsInSlide: 1,
            responsive: {
                0: { items: 1 },
                780: { items: 2 },
                1240: { items: 3 },
            },
            items: props.items,
            galleryItems: props.items.map(item => <Card onDragStart={(e) => e.preventDefault()} {...item}/>),
        }
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.items !== this.state.items) {
            this.setState({ items: nextProps.items, galleryItems: nextProps.items.map(item => <GitHubRepoCard onDragStart={(e) => e.preventDefault()} {...item}/>) })
        }
    }

    slidePrevPage = () => {
        const currentIndex = this.state.currentIndex - 1;
        this.setState({ currentIndex })
    }

    slideNextPage = () => {
        let currentIndex = this.state.currentIndex + 1;
        this.setState({ currentIndex });
    }

    handleOnSlideChange = (event) => {
        const { itemsInSlide, item } = event
        this.setState({ itemsInSlide, currentIndex: item })
    }

    render() {
        const { currentIndex, galleryItems, responsive } = this.state;
        const leftOptions = {
            loop: true,
            autoplay: true, 
            animationData: leftData,
        };
        const rightOptions = {
            loop: true,
            autoplay: true, 
            animationData: rightData,
        };
        return (
            <div className="carousel-container">
                <div className="carousel-btn" onClick={this.slidePrevPage}>
                    <Lottie options={leftOptions} isStopped={false} isPaused={false}/>
                </div>
                <div className="alice-carousel-container">
                    <AliceCarousel
                        buttonsDisabled
                        dotsDisabled
                        items={galleryItems}
                        slideToIndex={currentIndex}
                        responsive={responsive}
                        onSlideChanged={this.handleOnSlideChange}
                        onResized={this.handleOnSlideChange}
                    />
                </div>
                <div className="carousel-btn" onClick={this.slideNextPage}>
                    <Lottie options={rightOptions} isStopped={false} isPaused={false}/>
                </div>
            </div>
        )
    }
}

export default GitHubListContainer;
