//
//  ViewController.h
//  helloWorld_02
//
//  Created by Joe Puzzo on 2/20/14.
//  Copyright (c) 2014 Joe Puzzo. All rights reserved.
//

#import <UIKit/UIKit.h>

bool ruaGeek;

@interface ViewController : UIViewController
- (IBAction)btnClick:(id)sender;
@property (strong, nonatomic) IBOutlet UILabel *geekLabel;

@end
