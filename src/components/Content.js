import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        width: 345,
        margin: 10,
    },
    media: {
        height: 140,
    },
});
const Content = () => {
    const classes = useStyles();
    return (
        <ContentContainer id="Projects">
            <h1>My Projects</h1>
            <ContentWrapper>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://lh3.googleusercontent.com/proxy/TSa_8v5dQt9XgLWn42P2iuy5fiQVqNW9796XZ3rcl0cT-aX8YdAyl-rjXQGDRJckwno8st-DI1RGUsmr7gnfCI4R6gKXfzxYF6SRbMG4bJbQIY4yv6HbxDp--AAlT4xjNugFVaqfvGF_uRZMuA4Lo4A8tRfTAE4"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Amazon Clone
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Visit
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://1000logos.net/wp-content/uploads/2018/02/logo-tesla.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Tesla Clone
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Visit
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Slack Clone
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Visit
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="data:image/jpeg;base64,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"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Linked In Clone
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Visit
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Netflix Clone
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Visit
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://img.cinemablend.com/filter:scale/quill/a/4/b/1/c/9/a4b1c965864a7ff7bf0ee8e3fc6002db701511a9.jpg?mw=600"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Disney+ Clone
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Visit
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </ContentWrapper>
        </ContentContainer>
    )
}

export default Content
const ProjectCard = styled.div`
background-color: skyblue;
width: 350px;
height: 350px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 10px;
`
// create media queries
const ContentWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const ContentContainer = styled.div`
display: flex;
flex-direction:column;
width: 100%;
> h1 {
    
    margin-left: 12px;
    margin-bottom: 12px;
}
`