import React from 'react';
import { ConfigPane } from './ConfigDiv';

const { app } = require('electron').remote;

interface IProps {
  forceUpdate: () => void;
}

function FirstLaunch(props: IProps) {
  function formatCommon(
    key: string,
    name: string,
    value: string | boolean | string[],
    type: string,
    visible?
  ) {
    // if (isArray) {
    //   const val = value.split(/[ ,]+/);
    //   return { key, name, value: val };
    // }

    return { key, name, value, type };
  }

  function formatTag(
    key: string,
    toReturn: string,
    fromSite: string,
    folder: string,
    visible: boolean,
    checkFolder: boolean
  ) {
    const tagArr = fromSite.split(/[ ,]+/);
    return { key, toReturn, fromSite: tagArr, folder, visible, checkFolder };
  }

  const neededCommon = [
    formatCommon(
      'workingPath',
      'Working Directory',
      app.getPath('pictures'),
      'filePicker'
    ),
    formatCommon('itemsToLoad', 'Items to load at once', '100'),
    formatCommon('useDanbooruAPI', 'Use Danbooru API', true),
    formatCommon('displayType', 'Display Type', 'grid'),
    formatCommon('randomBGUse', 'Use randomized background', false),
    formatCommon('randomBGTags', 'Random Background included tags', [
      'wallpaper',
    ]),
    formatCommon('randomBGNotTags', 'Random Background disabled Tags', ['']),
    formatCommon('randomBGFolder', 'Random Background Folder', ''),
    formatCommon(
      'randomBGColor',
      'Random Background color',
      '#c2273480',
      'color'
    ),
    // formatCommon('firstLaunch', 'First Launch Done', 'true'),
  ];
  const tags = [
    formatTag('wallpaper', 'Wallpaper', 'wallpaper', '', true, false),
  ];

  return (
    <div>
      <ConfigPane
        commonSettings={neededCommon}
        settings={tags}
        forceUpdate={props.forceUpdate}
      />
    </div>
  );
}

export default FirstLaunch;
