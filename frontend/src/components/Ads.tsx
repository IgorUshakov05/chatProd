import React, { useEffect } from "react";

const YandexAd = ({ blockId }: { blockId: string }) => {
  useEffect(() => {
    if (!window.yaContextCb) {
      window.yaContextCb = [];
    }
    window.yaContextCb.push(() => {
      if (window.Ya && window.Ya.Context) {
        window.Ya.Context.AdvManager.render({
          blockId,
          renderTo: `yandex_rtb_${blockId}`,
          type: "feed",
        });
      }
    });

    
  }, [blockId]);

  return <div id={`yandex_rtb_${blockId}`} />;
};

export default YandexAd;
