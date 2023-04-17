#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location findEvents:(RCTResponseSenderBlock)callback)
{
  callback(@[name, location]);
}

@end
