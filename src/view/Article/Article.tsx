import React, { FC, useCallback, useMemo, useEffect, useState } from 'react';
import { articles } from './data';
import { Box, makeStyles, Typography, withStyles} from '@material-ui/core';
import { flexCenter, flexCenterV, size } from '@/common/styles';
import { useTranslation } from 'react-i18next';
// import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'
const ReactMarkdown = dynamic(() => import('react-markdown').then((module) => module.default), { ssr: false })

const useStyles = makeStyles({
  header: {
    ...size('100%', 386),
    position: 'relative',
  },
  bgImg: {
    ...size(353, 616),
    position: 'absolute',
    bottom: -150,
  },
  mainTitle: {
    color: '#95C72E',
    fontFamily: 'MontserratBold',
    fontSize: 24,
    lineHeight: 1.7,
    marginBottom: 8,
    marginTop: 47,
  },
  subTitle: {
    fontFamily: 'MontserratBold',
    lineHeight: 1.5,
    marginBottom: 4,
  },
  paragraph: {
    color: 'rgba(0, 0, 0, 0.5);',
    lineHeight: 1.7,
    marginBottom: 12,
  },
  link: {
    textDecoration: 'underline',
  },
  disclaimer: {
    marginTop: 152,
    fontStyle: 'italic',
  },
});


const styles = () => ({
  header: {
    ...size('100%', 386),
    position: 'relative',
  },
  bgImg: {
    ...size(353, 616),
    position: 'absolute',
    bottom: -150,
  },
  mainTitle: {
    color: '#95C72E',
    fontFamily: 'MontserratBold',
    fontSize: 24,
    lineHeight: 1.7,
    marginBottom: 8,
    marginTop: 47,
  },
  subTitle: {
    fontFamily: 'MontserratBold',
    lineHeight: 1.5,
    marginBottom: 4,
  },
  paragraph: {
    color: 'rgba(0, 0, 0, 0.5);',
    lineHeight: 1.7,
    marginBottom: 12,
  },
  link: {
    textDecoration: 'underline',
  },
  disclaimer: {
    marginTop: 152,
    fontStyle: 'italic',
  },
});

const MarkdownHeading3 = withStyles(styles)(({ classes, ...props }) => {
  return (<div className={classes.mainTitle}>{props.children}</div>)
});

const MarkdownParagraph = withStyles(styles)(({ classes, ...props }) => {
  return (<div className={classes.mainTitle}>{props.children}</div>)
});


// interface ArticleProps {
//   articleId: string;
// }

// s

export const Article: FC<{
  articleId: string,
  articles: Record<string, unknown>,
  categories: Record<string, unknown>,
  homepage: Record<string, unknown>}> = (props) => {

  const { articleId, articles, categories, homepage} = props;
  // console.log(props);
  const { i18n } = useTranslation();
  const [curArticle, setCurArticle] = useState({
    title: '',
    anchor: '',
    date: '',
    children: [],
  });
  // useEffect(() => {
  //   if (articles[articleId]) {
  //     setCurArticle(articles[articleId][i18n.languages[0]]);
  //   }
  // }, [articleId, i18n.languages[0]]);

  useEffect(() => {
    // if (articles[articleId]) {
    //   setCurArticle(articles[articleId][i18n.languages[0]]);
    // }
    const article = articles.filter((item) => item.slug === articleId)[0];
    if(article) {
    setCurArticle(article)
    console.log(article);
    console.log(article.content);
    }
  }, [articleId]);


  const classes = useStyles();


  const renderers = {
    h3: MarkdownHeading3,

};



  // const parseArticle = useCallback(
  //   (article) => {
  //     return article.map((node, i) => {
  //       if (node.type === 'mainTitle') {
  //         return (
  //           <div key={i} className={classes.mainTitle}>
  //             {node.content}
  //           </div>
  //         );
  //       }
  //       if (node.type === 'subTitle') {
  //         return (
  //           <div key={i} className={classes.subTitle}>
  //             {node.content}
  //           </div>
  //         );
  //       }
  //       if (node.type === 'paragraph') {
  //         return (
  //           <div key={i} className={classes.paragraph}>
  //             {node.content}
  //           </div>
  //         );
  //       }
  //       if (node.type === 'disclaimer') {
  //         return (
  //           <div key={i} className={classes.disclaimer}>
  //             {node.content}
  //           </div>
  //         );
  //       }
  //       if (node.type === 'paragraphWithChildren') {
  //         return (
  //           <div key={i} className={classes.paragraph}>
  //             {node.children.map((n) => {
  //               if (n.type === 'text') {
  //                 return (
  //                   <span style={{ color: 'rgba(0,0,0,.5)' }}>{n.content}</span>
  //                 );
  //               }
  //               if (n.type === 'link') {
  //                 return (
  //                   <a href={n.href} className={classes.link}>
  //                     {n.content}
  //                   </a>
  //                 );
  //               }
  //             })}
  //           </div>
  //         );
  //       }
  //     });
  //   },
  //   [classes],
  // );

  // const renderArticle = useMemo(() => {
  //   // return parseArticle(curArticle.children);
  // }, [curArticle, parseArticle]);
  return (
    <div>
      <Box className={classes.header}>
        <img
          src="/article/bg.png"
          className={classes.bgImg}
          style={{
            left: 0,
          }}
          alt=""
        />
        <img
          src="/article/bg.png"
          className={classes.bgImg}
          style={{
            right: 0,
            transform: 'scaleX(-1)',
          }}
          alt=""
        />
        <Box mt={'128px'} style={{ ...flexCenter }}>
          <Typography variant={'h3'}>{curArticle.title}</Typography>
        </Box>
        <Box
          style={{ ...flexCenterV }}
          mt={'264px'}
          padding={'0 364px'}
          justifyContent={'space-between'}
        >
          <span>
            <span style={{ color: 'rgba(0, 0, 0, 0.35);' }}>By </span>
            <span>{curArticle.anchor}</span>
          </span>
          <span style={{ color: 'rgba(0, 0, 0, 0.35);' }}>
            {curArticle.date}
          </span>
        </Box>
      </Box>
      <Box margin={'38px auto 124px auto'} width={'1200px'}>
        {/* {renderArticle} */}
        <ReactMarkdown components={renderers} >{curArticle.content}</ReactMarkdown>
      </Box>
    </div>
  );
};
